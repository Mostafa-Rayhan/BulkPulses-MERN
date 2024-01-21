import React from 'react';
import about from "../../../New folder/About.jpg"
const MoreAbout = () => {
    return (
        <div>
            <div className="hero flex-col my-20">
                <div className="hero-content flex-col lg:flex-row-reverse p-1">
                    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold text-left">More About BalkPulse !</h1>
                        <p className="py-6 text-justify">BulkPulse is a wholesale marketplace where you can buy pulses in large quantities.it was founded back in 1999. We provide pulses all over Bangladesh. You will get the best quality and clean pulses from us. To get these best quality pulses, you can order them on our website also you can contact us through our contact number.<br /><br /> Pulses (beans, peas, and lentils) have been consumed for at least 10 000 years and are among the most extensively used foods in the world. A wide variety of pulses can be grown globally, making them important both economically as well as nutritionally. Pulses provide protein and fibre, as well as a significant source of vitamins and minerals, such as iron, zinc, folate, and magnesium, and consuming half a cup of beans or peas per day can enhance diet quality by increasing intakes of these nutrients. In addition, the phytochemicals, saponins, and tannins found in pulses possess antioxidant and anti-carcinogenic effects, indicating that pulses may have significant anti-cancer effects. Pulse consumption also improves serum lipid profiles and positively affects several other cardiovascular disease risk factors, such as blood pressure, platelet activity, and inflammation. Pulses are high in fibre and have a low glycemic index, making them particularly beneficial to people with diabetes by assisting in maintaining healthy blood glucose and insulin levels. Emerging research examining the effect of pulse components on HIV and consumption patterns with aging populations indicates that pulses may have further effects on health. In conclusion, including pulses in the diet is a healthy way to meet dietary recommendations and is associated with reduced risk of several chronic diseases. Long-term randomized controlled trials are needed to demonstrate the direct effects of pulses on these diseases.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreAbout;