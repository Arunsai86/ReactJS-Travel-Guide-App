import './index.css'

const TravelItem = props => {
  const {travelPackageDetails} = props
  return (
    <li className="item-container">
      <img
        src={travelPackageDetails.imageUrl}
        alt={travelPackageDetails.name}
        className="image"
      />
      <h1 className="name">{travelPackageDetails.name}</h1>
      <p className="description">{travelPackageDetails.description}</p>
    </li>
  )
}
export default TravelItem
