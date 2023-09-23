# Problem Domain

>Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Process

# How the `businessTrip` Function Works

## Process 

1. **Start**: We begin the process.

2. **Prepare**: We set the initial total cost to zero. This will keep track of how much the trip will cost.

3. **Travel Plans**: We look at the list of cities you want to visit.

4. **Check Flights**: For each pair of cities in your list, we check if there is a direct flight between them.

5. **Cost Update**: If there's a direct flight between the cities, we add the cost of the flight to the total cost.

6. **Can You Fly?**: If there are no direct flights between any pair of cities, it means you can't make the trip with direct flights, and we stop here.

7. **Trip Complete**: If we successfully check all the cities in your list, your trip is possible with direct flights, and the total cost is ready.

8. **Results**: We tell you the total cost if the trip is possible, or we say it's not possible if there are no direct flights.

This simple explanation outlines how the `businessTrip` function works, including checking for direct flights and calculating the cost. You can use this as a straightforward guide to the function's process.
