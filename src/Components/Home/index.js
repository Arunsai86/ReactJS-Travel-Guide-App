import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelItem from '../TravelItem'

import './index.css'

class Home extends Component {
  state = {
    travelGuideList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTravelGuideData()
  }

  getTravelGuideData = async () => {
    const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(travelGuidePackagesApiUrl, options)
    const data = await response.json()
    const updateData = data.packages.map(eachPack => ({
      id: eachPack.id,
      name: eachPack.name,
      imageUrl: eachPack.image_url,
      description: eachPack.description,
    }))
    this.setState({
      travelGuideList: updateData,
      isLoading: false,
    })
  }

  renderLoaderView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelGuideView = () => {
    const {travelGuideList} = this.state
    return (
      <ul className="list-container">
        {travelGuideList.map(eachItem => (
          <TravelItem key={eachItem.id} travelPackageDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="title">Travel Guide</h1>
        <div>
          {isLoading ? this.renderLoaderView() : this.renderTravelGuideView()}
        </div>
      </div>
    )
  }
}

export default Home
