import React from 'react'


const BannerTabs = () => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-bordered font-poppins font-semibold text-[15px]">
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#B00000]" aria-label="Hosting" defaultChecked/>
                <div role="tabpanel" className="tab-content ont-poppins font-bold text-[64px] leading-[77.5px] mt-[26px] mb-[34px] text-[#2E2E2E]">
                  Premium Web<br />Hosting for Your<br />Website 
                </div>

                <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    className="tab text-[#D6D4D4]"
                    aria-label="Domain"/>
                <div role="tabpanel" className="tab-content font-poppins font-bold text-[64px] leading-[77.5px] mt-[26px] mb-[34px] text-[#2E2E2E]">Premium Web<br />Domain for Your<br />Website</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#D6D4D4]" aria-label="SEO" />
                <div role="tabpanel" className="tab-content font-poppins font-bold text-[64px] leading-[77.5px] mt-[26px] mb-[34px] text-[#2E2E2E]">Premium Web<br />SEO for Your<br />Website</div>
                
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#D6D4D4]" aria-label="Email" />
                <div role="tabpanel" className="tab-content font-poppins font-bold text-[64px] leading-[77.5px] mt-[26px] mb-[34px] text-[#2E2E2E]">Premium Web<br />Email for Your<br />Website</div>

            </div>
        </div>
    )
}

export default BannerTabs


