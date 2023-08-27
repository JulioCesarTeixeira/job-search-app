function nextItemInList<T>(list: T[], item: T): T {
  const currentValeuIndex = list.indexOf(item)
  // This will return either the next element in the list or the index 0 if we are at the last index
  const nextValueIndex = (currentValeuIndex + 1) % list.length
  return list[nextValueIndex]
}

export default nextItemInList
