import groupValues from './groupValues'

it('Should select values of properties that starts with the word (social)', () => {
  const results = groupValues(
    { socialMedia: 'facebook', socialNetwork: '' },
    'social'
  )

  expect(results[0]).toBe('facebook')
})
