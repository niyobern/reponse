import Image from "next/image"
import image from "../public/images/hubspot.jpg"
import logo from "../public/images/logo.png"

export default function Aboutus(){
    return (
        <div className="flex flex-col gap-1 md:gap-4 h-content">
            <div className="flex flex-col self-center md:px-24 pt-4">
                <h1 className="text-center text-2xl font-medium text-gray-900">Welcome to EcoGenius Conserve!</h1>
                <Image src={logo} alt="logo" width={500} height={500} className="w-48 h-48 self-center md:hidden"/>
                <div>
                    <p className="my-4 text-gray-800 leading-normal text-center">At EcoGenius Conserve, we are dedicated to creating a sustainable future for agriculture and ensuring the well-being of present and future generations. Our organization is driven by a strong mission and vision that guide our efforts to promote conservation agriculture, environmental restoration, and sustainable practices. By targeting smallholder farmers as our primary beneficiaries, we strive to empower them and enhance the productivity and resilience of their agricultural endeavors</p>
                    <p className="my-4 text-gray-800 text-lg leading-normal text-center">Join us at EcoGenius Conserve in our mission to create a sustainable future in agriculture. Together, we can make a meaningful difference in the lives of farmers, the environment, and future generations.</p>
                </div>
            </div>
            <div className="flex flex-col bg-teal-700 py-4 px-2 md:px-4 h-full">
                <div className="text-2xl font-medium text-white text-center mb-2">What makes us unique</div>
                <div className="flex flex-col md:grid grid-cols-4 gap-4 md:gap-8">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center pb-2">
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Holistic Aproach</div>
                        </div>
                        <p className="text-justify text-white text-sm">We believe in taking a holistic approach to sustainable agriculture, considering the interconnectedness of the environment, communities, and agricultural systems. By addressing various aspects such as soil health, water management, biodiversity conservation, and socio-economic factors, we create comprehensive and effective solutions.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center pb-2">
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Innovative Solutions</div>
                        </div>
                        <p className="text-justify text-white text-sm">We are committed to finding innovative solutions to the complex challenges faced by farmers and the agricultural sector. Our team of experts combines cutting-edge research, technology, and traditional knowledge to develop sustainable farming practices that are practical, scalable, and adaptable to different contexts.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center pb-2">
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Farmer-Centric Focus</div>
                        </div>
                        <p className="text-justify text-white text-sm"> We place smallholder farmers at the center of our work. We understand their unique challenges and opportunities, and we actively involve them in the decision-making process. By empowering farmers with knowledge, training, and access to resources, we aim to improve their livelihoods and build resilient farming communities.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center pb-2">
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Collaborative Partnerships</div>
                        </div>
                        <p className="text-justify text-white text-sm">We believe in the power of collaboration. We actively seek partnerships with development organizations, government agencies, research institutions, and agribusinesses to leverage collective knowledge and resources. By fostering collaborative relationships, we can maximize our impact and create lasting change in the agricultural sector.</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col bg-sky-400 py-4 px-2 md:px-4 h-96 md:h-full relative overflow-hidden">
                <Image src={image} alt="image" fill={true} className="object-fill"/>
                <div className="text-2xl font-medium text-sky-400 text-center mb-2">Our Commitment to farmers</div>
                <div className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-8">
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-sky-400"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-sky-400 text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-sky-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-sky-400"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-sky-400 text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-sky-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-sky-400"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-sky-400 text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-sky-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-4 md:pb-8 px-2 md:px-0 h-full rounded">
                <div className="text-3xl font-medium text-sky-900 text-center mb-2 md:mb-3">Why choose us?</div>
                <div className="flex flex-col md:grid grid-cols-4 gap-2 md:gap-4">
                    <div className="flex flex-col items-center bg-sky-800 p-2 md:p-4 rounded-lg shadow-xl">
                        <div className="flex flex-col items-center pb-2">
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Expertise and Experience</div>
                        </div>
                        <p className="text-justify text-white text-sm">EcoGenius Conserve brings a wealth of expertise and experience in the field of sustainable agriculture. Our team comprises seasoned professionals from diverse backgrounds, including agriculture, environmental science, and rural development. With our deep understanding of the sector, we can provide tailored solutions to meet the specific needs of development partners and agribusinesses.</p>
                    </div>
                    <div className="flex flex-col items-center bg-sky-800 p-2 md:p-4 rounded-lg shadow-xl">
                        <div className="flex flex-col items-center pb-2">
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Impact-Oriented Approach</div>
                        </div>
                        <p className="text-justify text-white text-sm">We are driven by our commitment to creating a positive impact on the environment and the lives of farmers. Our projects and initiatives are carefully designed to deliver tangible results, such as increased crop yields, improved soil fertility, reduced environmental footprint, and enhanced farmer incomes. When you choose to work with us, you can be confident that your resources will be invested in projects that make a real difference.</p>
                    </div>
                    <div className="flex flex-col items-center bg-sky-800 p-2 md:p-4 rounded-lg shadow-xl">
                        <div className="flex flex-col items-center pb-2">
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Scalability and Replicability</div>
                        </div>
                        <p className="text-justify text-white text-sm">Our solutions are designed with scalability and replicability in mind. We understand the importance of implementing sustainable practices on a larger scale to create systemic change. By developing models that can be adapted and replicated across different regions and contexts, we help our partners and clients achieve widespread impact and contribute to global sustainability goals.</p>
                    </div>
                    <div className="flex flex-col items-center bg-sky-800 p-2 md:p-4 rounded-lg shadow-xl">
                        <div className="flex flex-col items-center pb-2">
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Long-Term Partnership</div>
                        </div>
                        <p className="text-justify text-white text-sm">We believe in building long-term partnerships based on trust, transparency, and shared values. When you choose EcoGenius Conserve as your partner, you can expect a collaborative and dedicated approach. We work closely with our partners to understand their unique needs and co-create solutions that align with their goals. Our aim is to foster enduring relationships that drive sustained impact and positive change.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}