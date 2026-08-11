import { redis } from '@/lib/redis';

// Keys for redis
const DRIVER_LOCATION_KEY = 'driver:locations';

export class DriverLocationService {
  /**
   * Sets the location of a driver using Redis GEO commands.
   * This allows for efficient spatial querying if needed later.
   */
  static async updateLocation(driverId: string, lat: number, lng: number) {
    // We add the driver to the geospatial index
    await redis.geoadd(DRIVER_LOCATION_KEY, lng, lat, driverId);
    
    // We can also store a simple hash for fast direct lookups of the latest data + timestamp
    const timestamp = Date.now();
    await redis.hset(`driver:${driverId}:location`, {
      lat,
      lng,
      timestamp
    });

    // Optional: expire the individual key after 1 hour of inactivity
    await redis.expire(`driver:${driverId}:location`, 3600);
  }

  /**
   * Gets the last known location of a specific driver.
   */
  static async getLocation(driverId: string) {
    const data = await redis.hgetall(`driver:${driverId}:location`);
    if (!data || Object.keys(data).length === 0) {
      return null;
    }
    
    return {
      lat: parseFloat(data.lat),
      lng: parseFloat(data.lng),
      timestamp: new Date(parseInt(data.timestamp, 10))
    };
  }

  /**
   * Gets the distance between two drivers (example of GEO usage)
   */
  static async getDistanceBetween(driverA: string, driverB: string) {
    return redis.geodist(DRIVER_LOCATION_KEY, driverA, driverB, 'km' as any);
  }
}
