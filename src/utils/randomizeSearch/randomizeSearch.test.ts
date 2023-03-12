import randomizeSearch from './randomizeSearch'

it('Should check if function return a random array value', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.7)
  const result = randomizeSearch(['cliff', 'likovo'])

  expect(result).toBe('likovo')
})
