import React from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


export default function PopupPage (){
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#060116] rounded-lg shadow-xl w-[95%] md:w-[1191px] h-[95%] md:h-[984px] mx-4 p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-[#8133F1] justify-center">Let’s Talk About Your Project Today!</h2>
            <p>Click Below for a Free Consultation and Customized Quote!</p>
            </div>

            <form  className="space-y-4 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div> 
              <label className="block text-sm font-medium text-[#FFFFFF] mb-1">First Name*</label>
              <input 
                type="text" 
                name="firstName" 
              />
            </div>
            <div> 
              <label className="block text-sm font-medium text-[#FFFFFF] mb-1">Last Name*</label>
              <input 
                type="text" 
                name="lastname" 
              />
            </div>
            <div> 
              <label className="block text-sm font-medium text-[#FFFFFF] mb-1">Business Name*</label>
              <input 
                type="text" 
                name="business" 
              />
            </div>
            <div> 
              <label className="block text-sm font-medium text-[#FFFFFF] mb-1">I am looking for...</label>
              <input 
                type="text" 
                name="E-commerce web site" 
              />
            </div>
            <div> 
              <label className="block text-sm font-medium text-[#FFFFFF] mb-1">Email*</label>
              <input 
                type="text" 
                name="firstName" 
              />
            </div>
            </div>
                        {/* Button */}
        <button className="bg-[#8133F1] flex items-center justify-center gap-2 text-[18px] font-semibold text-white w-[239px] h-[70px] rounded-[36px] mx-auto transition hover:bg-[#6f23e0]">
          GET STARTED
          <ArrowCircleRightOutlinedIcon />
        </button>
            </form>
        </div>
    )
}