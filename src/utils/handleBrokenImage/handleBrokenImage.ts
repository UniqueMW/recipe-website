import BrokenImage from 'assets/image-broken-svgrepo-com.svg'

function handleBrokenImage(
  event: React.SyntheticEvent<HTMLImageElement, Event>
): void {
  event.currentTarget.src = BrokenImage
}

export default handleBrokenImage
