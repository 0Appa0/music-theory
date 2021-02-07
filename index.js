const musicalNotes = () => ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']

const majorScale = () => [ 1, 3, 5, 6, 8, 10, 12 ]

const minorScale = () => [ 1, 3, 4, 6, 8, 9, 11 ]

const majorChordNotes = () => [1, 5, 8]

const minorChordNotes = () => [1, 4, 8]

const scaleRelativeChords = () => [1, 4, 5]

const scaleInverseChords = () => [2, 3, 6]

const seventhChord = () => [7]


const scaleStartFrom = (note) => {
  let allNotes = musicalNotes()
  let noteIndex = allNotes.indexOf(note)
  let resultArray = []

  for (let i = 1; i <= allNotes.length; i++) {
    console.log(i)
    resultArray.push(allNotes[noteIndex])
    noteIndex = (noteIndex + 1) % 12 
  }
  return resultArray
}

const getMajorScale = (note) => {
  const formattedNotes = scaleStartFrom(note)
  const resultArray = majorScale().map(item => formattedNotes[item - 1])

  return resultArray
}

const getMinorScale = (note) => {
  const formattedNotes = scaleStartFrom(note)
  const resultArray = minorScale().map(item => formattedNotes[item - 1])

  return resultArray
}
 
const getMajorChordsOfMajorScale = (note) =>  {
  const scaleNotes = getMajorScale(note)
  const resultArray = scaleRelativeChords().map(item => scaleNotes[item - 1])

  return resultArray
}

const getMinorChordsOfMajorScale = (note) => {
  const scaleNotes = getMajorScale(note)
  const resultArray = scaleInverseChords().map(item => scaleNotes[item - 1])

  return resultArray
}

const getSeventhChordsOfMajorScale = (note) =>  {
  const scaleNotes = getMajorScale(note)
  const resultArray = seventhChord().map(item => scaleNotes[item - 1])

  return resultArray
}

const getMinorChordsOfMinorScale = (note) =>  {
  const scaleNotes = getMinorScale(note)
  const resultArray = scaleRelativeChords().map(item => scaleNotes[item - 1])

  return resultArray
}

const getMajorChordsOfMinorScale = (note) => {
  const scaleNotes = getMinorScale(note)
  const resultArray = scaleInverseChords().map(item => scaleNotes[item - 1])

  return resultArray
}

const getSeventhChordsOfMinorScale = (note) =>  {
  const scaleNotes = getMinorScale(note)
  const resultArray = seventhChord().map(item => scaleNotes[item - 1])

  return resultArray
}


const getMajorChordNotes = (note) => {
  const formattedNotes = scaleStartFrom(note)
  const resultArray = majorChordNotes().map(item => formattedNotes[item - 1])

  return resultArray
}

const getMinorChordNotes = (note) => {
  const formattedNotes = scaleStartFrom(note)
  const resultArray = minorChordNotes().map(item => formattedNotes[item - 1])

  return resultArray
}
