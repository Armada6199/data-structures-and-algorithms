const { businessTrip } = require('./index');

const jordanRouteMap = {
  Amman: { Aqaba: 150, Petra: 200 },
  Aqaba: { Amman: 150, WadiRum: 100 },
  Petra: { Amman: 200, WadiRum: 50 },
  WadiRum: { Aqaba: 100, Petra: 50 },
};

describe('businessTrip function', () => {
  it('should return the total cost for a valid trip with direct flights in Jordan', () => {
    const itinerary = ['Amman', 'Petra', 'Aqaba'];
    const result = businessTrip(jordanRouteMap, itinerary);
    expect(result).toBe(350);
  });

  it('should return null for a trip with no direct flight in Jordan', () => {
    const itinerary = ['WadiRum', 'Aqaba', 'Petra'];
    const result = businessTrip(jordanRouteMap, itinerary);
    expect(result).toBeNull();
  });

  it('should return 0 for a trip with a single city in Jordan', () => {
    const itinerary = ['Amman'];
    const result = businessTrip(jordanRouteMap, itinerary);
    expect(result).toBe(0);
  });

  it('should return 0 for an empty itinerary in Jordan', () => {
    const itinerary = [];
    const result = businessTrip(jordanRouteMap, itinerary);
    expect(result).toBe(0);
  });

  it('should return the total cost for a valid trip with multiple direct flights in Jordan', () => {
    const itinerary = ['Amman', 'Petra', 'WadiRum', 'Aqaba'];
    const result = businessTrip(jordanRouteMap, itinerary);
    expect(result).toBe(400);
  });
});
