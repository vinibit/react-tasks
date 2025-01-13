const timeToSeconds = (time: string) => {
    const [hours = 0, minutes = 0, seconds = 0] = time.split(':').map(Number)
    return hours * 3600 + minutes * 60 + seconds
}

export { timeToSeconds }