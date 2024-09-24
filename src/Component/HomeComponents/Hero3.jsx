import React from 'react'

function Hero3() {
  return (
    <div className='flex flex-col gap-[36px] m-3 lg:m-0'>
      <div className='flex flex-col gap-3 w-full m-[0em] p-[0em] border-[0em] justify-center items-center'>
        <div className='mt-[36px] px-6 py-3 border-0 bg-[#3D55CC1A] w-fit flex gap-[10px] rounded-[24px] text-[#3D55CC] font-[400] text-[18px] text-center leading-[21.78px]'>
          Features
        </div>
        <p className='text-[#000000] font-[600] text-[24px] md:text-[32px] text-center leading-[30px] md:leading-[38.73px]'>
          Elevate Your Social Media Strategy
        </p>
        <p className='text-[#828282] font-[400] text-[16px] md:text-[18px] text-center leading-[19px] md:leading-[21.78px]'>
          Boost your social media with instant results and 24/7 support. Ideal for influencers, businesses, and resellers.
        </p>
      </div>

      {/* Feature Cards */}
      <div className='w-full h-fit flex flex-wrap mx-auto justify-center items-center gap-[24px] md:gap-[36px]'>
        {/* Card 1 */}
        <div className='gradient-border w-full md:w-[602px] h-auto flex justify-center items-center'>
          <div className='w-full md:w-[601px] h-auto rounded-[24px] justify-center items-center pt-4 flex flex-col gap-[10px] bg-[#F9F9FF] overflow-hidden'>
            <p className='font-[600] text-[24px] md:text-[32px] leading-[28px] md:leading-[38.73px] mt-2'>User-Friendly Dashboard</p>
            <p className='text-[#6F6C8F] font-[400] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px] w-[90%] md:w-[517px] mt-2 h-auto'>
              An intuitive, easy-to-navigate interface for managing orders and tracking progress.
            </p>
            <div id='img3'></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='gradient-border w-full md:w-[602px] h-auto flex justify-center items-center'>
          <div className='w-full md:w-[601px] h-auto rounded-[24px] justify-center items-center pt-4 flex flex-col gap-[10px] bg-[#F9F9FF] overflow-hidden'>
            <p className='font-[600] text-[24px] md:text-[32px] leading-[28px] md:leading-[38.73px] mt-2'>Automated Order Processing</p>
            <p className='text-[#6F6C8F] font-[400] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px] w-[90%] md:w-[517px] mt-2 h-auto'>
              Instant or scheduled delivery of services, with orders processed automatically.
            </p>
            <div id='img4'></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='gradient-border w-full md:w-[342px] overflow-hidden max-h-[380px] flex justify-center items-center'>
          <div className='w-full md:w-[341px] h-[379px] rounded-[24px] justify-center items-center pt-4 flex flex-col gap-[10px] bg-[#F9F9FF] overflow-hidden'>
            <p className='font-[600] text-[24px] md:text-[32px] leading-[28px] md:leading-[38.73px] mt-2'>API Integration</p>
            <p className='text-[#6F6C8F] font-[400] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px] w-[90%] md:w-[283px] mt-2 h-auto'>
              API support for developers and resellers to integrate the panel’s services into their own platforms.
            </p>
            <div id='img5'></div>
          </div>
        </div>

        {/* Card 4 */}
        <div className='gradient-border w-full md:w-[484px] overflow-hidden max-h-[380px] flex justify-center items-center'>
          <div className='w-full md:w-[483px] h-[379px] rounded-[24px] justify-center items-center pt-4 flex flex-col gap-[10px] bg-[#F9F9FF] overflow-hidden'>
            <p className='font-[600] text-[24px] md:text-[32px] leading-[28px] md:leading-[38.73px] mt-2'>Secure and Confidential</p>
            <p className='text-[#6F6C8F] font-[400] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px] w-[90%] md:w-[409px] mt-2 h-auto'>
              Secure payment gateways and strict privacy policies to protect user information.
            </p>
            <div id='img6'></div>
          </div>
        </div>

        {/* Card 5 */}
        <div className='gradient-border w-full md:w-[342px] overflow-hidden max-h-[380px] flex justify-center items-center'>
  <div className='w-full md:w-[341px] h-[379px] rounded-[24px] justify-center items-center pt-4 flex flex-col gap-[10px] bg-[#F9F9FF] overflow-hidden'>
    <p className='font-[600] text-[24px] md:text-[32px] leading-[28px] md:leading-[38.73px] mt-2 text-center'>
      Customizable Service Packages
    </p>
    <p className='text-[#6F6C8F] font-[400] text-[16px] md:text-[18px] leading-[19px] md:leading-[21.78px] w-[90%] md:w-[283px] mt-2 h-auto text-center'>
      Ability to create custom service packages tailored to specific needs.
    </p>
    <div id='img7'></div>
  </div>
</div>

      </div>
    </div>
  )
}

export default Hero3;
