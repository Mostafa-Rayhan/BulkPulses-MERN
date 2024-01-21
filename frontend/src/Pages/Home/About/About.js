import React from 'react';
import about from "../../../New folder/About.jpg"


const About = () => {
    return (
        <div>
            <div className="hero flex-col my-20">
                <div className="hero-content flex-col lg:flex-row-reverse p-1">
                    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold text-left">BulkPulses !</h1>
                        <p className="py-6 text-justify">Bulkpulses is a wholesale marketplace where you can buy pulses in large quantities and also at a reasonable price. We provide delivery of our pulses in allover Bangladesh. You will get the best quality and clean pulses from us. To get these best quality pulses, you can order them on our website also you can contact us through our contact number. <br /> Official Number: <b>+8801779417800</b> <br /><br /> Pulses (beans, peas, and lentils) have been consumed for at least 10 000 years and are among the most extensively used foods in the world. A wide variety of pulses can be grown globally, making them important both economically as well as nutritionally. Pulses provide protein and fibre, as well as a significant source of vitamins and minerals, such as iron, zinc, folate, and magnesium, and consuming half a cup of beans or peas per day can enhance diet quality by increasing intakes of these nutrients.</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;