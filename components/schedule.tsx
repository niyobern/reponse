import Head from "next/head";
import TimeLine from "./timeline";
function ScheduleComponent({ data }: any) {
    return (
    <>
    <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js" type="decdf7a5ee4755ab5677dac3-text/javascript"></script>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <title>Live Football</title>
      </Head>
    <div id="container">
      <div id="snippetContent">
        <section className="timeline_area section_padding_130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-lg-6">
                <div className="section_heading text-center">
                  <h6>Live Football</h6>
                  <h3>Schedule</h3>
                  <div className="line"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {data.map((item: any) => (
                  <TimeLine data={item}/>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default ScheduleComponent;
