
import { AlignJustify, Bell, Globe, Share2 } from 'lucide-react';
import './header.css';
import homeBanneer from '../../assets/homeBanner.png';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-black h-[78px] z-50 w-full shadow-md" style = {{position: 'sticky', zIndex: 50, top: 0, backgroundColor: 'var(--black-color)'}}>
            <div className="flex justify-between items-center h-full px-6">
                {/* Left side - Hamburger Menu and Logo */}
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="flex items-center space-x-4" style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                    <AlignJustify size={24} color="var(--primary-color)" className="cursor-pointer hover:opacity-80 transition-opacity" style={{marginLeft: '12px'}}/>
                    <div style={{marginTop: '12px', marginRight: '8px', marginLeft: '8px'}}>
                    <img className="w-[130px] h-[30px] object-contain" src={homeBanneer} alt="GameStones Logo"/>
                    </div>
                    <Share2 size={24} color="var(--primary-color)" className="cursor-pointer hover:opacity-80 transition-opacity" />
                </div>
                
                {/* Right side - Icons */}
                <div className="flex items-center space-x-6">
                    <Bell size={24} color="var(--primary-color)" className="cursor-pointer hover:opacity-80 transition-opacity" />
                    <Globe size={24} color="var(--primary-color)" className="cursor-pointer hover:opacity-80 transition-opacity" style={{marginRight: '20px', marginLeft: '16px'}}/>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header;