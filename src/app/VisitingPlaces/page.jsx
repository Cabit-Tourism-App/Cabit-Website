

export default function TouristAttractions() {
    return (
        <div className="container mt-4">
                <div className="container mx-auto p-4">
        <h1 className="text-5xl   font-bold">Top 50 Tourist Attractions In India</h1>
        <p className="text-lg">Explore the list of best tourist destinations in India include Taj Mahal, Red Fort, India Gate & many more on MakeMyTrip.</p>
    </div>

            <div className="d-flex flex-wrap justify-content-center">
                {/* Card 1 */}
                <div className="card m-3" style={{ width: '22rem' }}>
                    <img src="/images/TajMahal.jpg" width={350} height={200} className="card-img-top" alt="Taj Mahal with reflection in water" />
                    <div className="card-body">
                        <h5 className="card-title text-start">
                        <span className="badge badge-custom me-2 bg-[#FFEA66] text-black">1</span>
                            Taj Mahal, Agra
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted text-start">An Immortal Symbol of Love</h6>
                        <p className="card-text text-start">Majestically located on the banks of Yamuna River, this wonder of the world was built by the Mughal Emperor Shah Jahan as a memorial for his beloved wife Mumtaz Mahal.</p>
                        <div className="d-flex justify-content-between mt-2 ">
                        <div className="btn btn-explore transition-all duration-300 border border-gray-400 bg-transparent text-black hover:bg-gray-200 active:scale-95">EXPLORE</div>
                        <div className="btn btn-plan transition-all duration-300 bg-[#FFEA66] text-black hover:bg-yellow-400 active:scale-95">PLAN TRIP</div>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card m-3" style={{ width: '22rem' }}>
                    <img src="/images/Redfort.jpg" width={350} height={200} className="card-img-top" alt="Red Fort with Indian flag" />
                    <div className="card-body">
                        <h5 className="card-title text-start">
                        <span className="badge badge-custom me-2 bg-[#FFEA66] text-black">1</span>
                            Red Fort, Delhi
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted text-start">Symbol of Mughal Dynasty</h6>
                        <p className="card-text text-start">Located in Chandni Chowk Old Delhi, this red sandstone structure was constructed under the reign of Mughal emperor Shah Jahan for protection against invaders.</p>
                        <div className="d-flex justify-content-between mt-2 ">
                        <div className="btn btn-explore transition-all duration-300 border border-gray-400 bg-transparent text-black hover:bg-gray-200 active:scale-95">EXPLORE</div>
                        <div className="btn btn-plan transition-all duration-300 bg-[#FFEA66] text-black hover:bg-yellow-400 active:scale-95">PLAN TRIP</div>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card m-3" style={{ width: '22rem' }}>
                    <img src="/images/amritsar.jpg" width={350} height={200} className="card-img-top" alt="Golden Temple with reflection in water" />
                    <div className="card-body">
                        <h5 className="card-title text-start">
                        <span className="badge badge-custom me-2 bg-[#FFEA66] text-black">1</span>
                            Golden Temple, Amritsar
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted text-start">Holiest Sikh Shrine</h6>
                        <p className="card-text text-start">Also known as Sri Harmandir Sahib, Golden Temple is considered to be the most important pilgrimg site amongst Sikhs and will leave you in awe with its jaw-dropping gold and marble edifice.</p>
                        <div className="d-flex justify-content-between mt-2 ">
                        <div className="btn btn-explore transition-all duration-300 border border-gray-400 bg-transparent text-black hover:bg-gray-200 active:scale-95 ">EXPLORE</div>
                        <div className="btn btn-plan transition-all duration-300 bg-[#FFEA66] text-black hover:bg-yellow-400 active:scale-95 ">PLAN TRIP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
