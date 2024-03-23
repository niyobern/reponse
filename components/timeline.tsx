import Item from "./item"
export default function TimeLine({ data }: any){
    return (
        <div className="apland-timeline-area">
            <div className="single-timeline-area">
                <div className="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInLeft' }}>
                    <p>{data.description}</p> //SideBar name of the section
                </div>
                <div className="row">
                    {data.items.map((item:any) => (
                        <Item match={item.match} competition={item.competition}/>
                    ))}
                </div>
            </div>
        </div>
    )
}