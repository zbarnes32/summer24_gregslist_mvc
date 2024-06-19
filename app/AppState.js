import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  /**
   * @type {Car[]}
   */
  cars = [
    new Car({
      make: 'Mazda',
      model: 'Miata',
      year: 2007,
      imgURL: 'https://images.unsplash.com/photo-1552615526-40e47a79f9d7?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 8000,
      mileage: 10000,
      runs: true,
      hasCleanTitle: true,
      fuelType: 'gasoline',
      description: 'zoom zoom',
      color: '#80869c'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      year: 1997,
      imgURL: 'https://images.unsplash.com/photo-1610884447640-42b8ec61a933?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 6000,
      mileage: 200000,
      runs: true,
      hasCleanTitle: false,
      fuelType: 'gasoline',
      description: 'zoom zoom zoom',
      color: '#992943'
    }),
    new Car({
      make: 'Chevrolet',
      model: 'Corvette',
      year: 2016,
      imgURL: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 30000,
      mileage: 20,
      runs: false,
      hasCleanTitle: false,
      fuelType: 'gasoline',
      description: 'Great project car 😉',
      color: '#292649'
    }),
    new Car({
      make: 'Isuzu',
      model: 'Rodeo',
      year: 1996,
      imgURL: 'https://images.unsplash.com/photo-1632407027814-f398db997b4a?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 5000,
      mileage: 280000,
      runs: false,
      hasCleanTitle: false,
      fuelType: 'oats',
      description: 'RIP in the jalopy jungle',
      color: '#8c9197'
    }),
  ]

  houses = [
    new House ({
      address: '123 Main Street, Boise, ID, 83709',
      year: 2000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      price: 450000,
      description: 'Cute house, great for a young family.',
      imgUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
    new House ({
      address: '987 Willow Avenue, Meridian, ID, 83646',
      year: 2024,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3000,
      price: 750000,
      description: 'The perfect house for the perfect family.',
      imgUrl: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww'
    }),
    new House ({
      address: '867 FiveThreeONine Court, Boise, ID, 83703',
      year: 1980,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1000,
      price: 250000,
      description: 'Great starter home for a 1st time home buyer. May need a little TLC.',
      imgUrl: 'https://images.unsplash.com/photo-1616555670626-09496d2eed9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9sZCUyMGhvdXNlfGVufDB8fDB8fHww'
    })
      
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())