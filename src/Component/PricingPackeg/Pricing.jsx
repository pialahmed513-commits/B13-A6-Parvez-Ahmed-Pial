import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mb-10 text-center'>
                <h1 className=' text-2xl md:text-4xl font-bold lg:text-4xl '>Simple, Transparent Pricing</h1>
                <p className=''>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
         

        <div className='flex flex-wrap gap-6 justify-center items-center p-4'>
    {/* price-card-1 */}
    <div className="card w-full max-w-sm bg-base-100 shadow-sm rounded-2xl border border-gray-100">
        <div className="card-body">
            <div>
                <h2 className="text-3xl font-bold">Starter</h2>
                <p>Perfect for getting started</p>
            </div>
            <p className="text-xl font-bold">$0/month</p>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>AI-driven image enhancements</span>
                </li>
            </ul>
            <div className="mt-6">
                <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-2xl border-none">Get Started Free</button>
            </div>
        </div>
    </div>

    {/* price-card-2 */}
    <div className="card w-full max-w-sm bg-base-100 shadow-sm rounded-2xl text-white">
        <div className="card-body bg-gradient-to-b from-[#4F39F6] to-[#9514FA] rounded-2xl relative">
            <span className="badge badge-warning absolute top-4 right-4">Most Popular</span>
            <div>
                <h2 className="text-3xl font-bold">Pro</h2>
                <p className="opacity-90">Best for professionals</p>
            </div>
            <p className="text-xl font-bold">$29/mo</p>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Unlimited projects</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Cloud sync</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Advanced analytics</span>
                </li>
            </ul>
            <div className="mt-6">
                <button className="btn bg-white text-[#4F39F6] w-full rounded-2xl hover:bg-gray-100 border-none">Start Pro Trial</button>
            </div>
        </div>
    </div>

    {/* price-card-3 */}
    <div className="card w-full max-w-sm bg-base-100 shadow-sm rounded-2xl border border-gray-100">
        <div className="card-body">
            <div>
                <h2 className="text-3xl font-bold">Enterprise</h2>
                <p>For teams and businesses</p>
            </div>
            <p className="text-xl font-bold">$99/month</p>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>High-resolution image generation</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Customizable style templates</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Batch processing capabilities</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Dedicated support</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>SLA guarantee</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Custom branding</span>
                </li>
            </ul>
            <div className="mt-6">
                <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-2xl border-none">Contact Sales</button>
            </div>
        </div>
    </div>
</div>



    
        </div>
    );
};

export default Pricing;