const Mission = () => {
    return (
        <>
            <div className="mission">
                <p className="title text-left">Our Mission</p>
                <hr className="mt-8 mb-8" />
                <pre className="text-left">
                    Trac aims to enable decentralized tracking of Ordinals metaprotocols.{"\n"}
                    Currently, the existing trackers for metaprotocols are heavily centralized,{"\n"}
                    which goes against the decentralized nature of cryptocurrencies like Bitcoin.{"\n"}
                    Trac solves this problem by providing a decentralized network that allows{"\n"}
                    anyone to connect, utilize, and earn from it.{"\n"}
                </pre>
                <div className="figure-box">
                    <p className="figure">100M+</p>
                    <p className="comment text-left">transactions tracked by Trac</p>
                    <div className="comment flex join-btn">
                        <svg aria-hidden="true" className="me-3 w-3 h-3 e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                        SEE WHY
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mission;