SELECT users.name, rides.distance AS distance_traveled, (rides.distance * rides.fare) as total_fares FROM users JOIN rides ON users.id = rides.user_id LIMIT 10
