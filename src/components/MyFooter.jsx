import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
    return (
        <Footer bgDark className='rounded-none'>
            <div className="w-full px-4 lg:px-24" >
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 hover:text-white">
                    <div>
                        <Footer.Title title="Company" />
                        <Footer.LinkGroup col >
                            <Footer.Link href="/about" className=' hover:text-white'>About</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Careers</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Brand Center</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Blog</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className=' hover:text-white'>Discord Server</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Twitter</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Facebook</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className=' hover:text-white'>Privacy Policy</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Licensing</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className=' hover:text-white'>iOS</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Android</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>Windows</Footer.Link>
                            <Footer.Link href="#" className=' hover:text-white'>MacOS</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between rounded">
                    <Footer.Copyright href="#" by="OpenBooks™" year={2023} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" className=' hover:text-white' icon={BsFacebook} />
                        <Footer.Icon href="#" className=' hover:text-white' icon={BsInstagram} />
                        <Footer.Icon href="#" className=' hover:text-white' icon={BsTwitter} />
                        <Footer.Icon href="#" className=' hover:text-white' icon={BsGithub} />
                        <Footer.Icon href="#" className=' hover:text-white' icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default MyFooter