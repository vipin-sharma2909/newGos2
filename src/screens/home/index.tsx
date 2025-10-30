import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useAppDispatch } from '../../hooks/redux';
// import Carousel from '../../components/carousel';
// Update the import path below if Carousel is located elsewhere, for example:
import Carousel from "../../components/carousel";
import jackpot from "../../assets/jackpot.png";
import fastest from "../../assets/fastest.png";
import rapid from "../../assets/rapid.png";
import jackpotPng from "../../assets/jackpotPng.png";
import { contests } from '../../api';
import { Check, CheckCircle, Trophy } from 'lucide-react';
import { QuestionType } from '../../utils/questionsEnum';
import { setContestsData } from './homeSlice';
import { setNameAndContestIdInLS } from '../../commonFunctions';

// Or create the Carousel component at '../../components/carousel.tsx'

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const fetchContestData = async () => {
            try {
                const response = await contests.fetchContests();
                const contestData = response.data.filter((contest: any) => contest.contest_type === 0);
                console.log("Contest Data:", contestData);
                dispatch(setContestsData(contestData));
                const nameAndID = contestData.map((contest: any) => ({ name: contest.name, contestId: contest.id }));
                // dispatch(setNameAndContestId(nameAndID));
                setNameAndContestIdInLS(nameAndID);

            } catch (error) {
                console.error("Error fetching contest data:", error);
            }
        }
        fetchContestData();
    }, [])
    return (
        <div className="min-h-screen background-white bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex justify-center" style={{ maxHeight: '100vh', backgroundColor: 'var(--background-color)', }}>
            <div className="w-full max-w-md bg-white min-h-screen" style={{ backgroundColor: 'var(--background-color)' }}>
                <Header />
                {/* {Crousel Content} */}
                <div className="pb-20"> {/* Add padding bottom to prevent footer overlap */}
                    <Carousel />
                </div>
                {/* {Contests Section } */}
                <div style={{ paddingLeft: '16px', paddingRight: '16px', marginTop: '16px', background: 'var(--black-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img src={jackpot} alt="Jackpot Contest" style={{ width: '100%', marginBottom: '10px' }} onClick={() => navigate(`/questions/${QuestionType.JACKPOT}`)} />
                    <img src={fastest} alt="Fastest Contest" style={{ width: '100%', marginBottom: '10px' }} onClick={() => navigate(`/questions/${QuestionType.FASTEST_FINGER}`)} />
                    <img src={rapid} alt="Rapid Contest" style={{ width: '100%' }} onClick={() => navigate(`/questions/${QuestionType.RAPID_FIRE}`)} />


                </div>
                {/* {Game Rules Section} */}
                <div className="px-4 py-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'var(--black-color)' }}>
                    <h1 className="text-2xl font-bold text-center mb-1" style={{ fontSize: '28px', color: 'white' }}>Game Rules</h1>
                    <div className="flex flex-row items-center text-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Check size={28} color="var(--primary-color)" />
                        <p className="text-gray-700" style={{ fontSize: '18px', color: 'white', marginLeft: '8px' }}>Answer within the time limit</p>
                    </div>
                    <div className="flex flex-row items-center text-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <CheckCircle size={28} color="var(--primary-color)" />
                        <p className="text-gray-700" style={{ fontSize: '18px', color: 'white', marginLeft: '8px' }}>Each correct answer earns point</p>
                    </div>
                    <div className="flex flex-row items-center text-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Trophy size={28} color="var(--primary-color)" />
                        <p className="text-gray-700" style={{ fontSize: '18px', color: 'white', marginLeft: '8px' }}>Highest scorer wins the jackpot</p>
                    </div>
                </div>
                <div style={{ background: 'var(--black-color)' }}>
                    {/* {Live people section} */}
                    <img src={jackpotPng} alt="Live People" style={{ width: '100%' }} />
                    <div style={{ marginBottom: '200px', background: 'var(--background-color)', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                        <h1 className="text-2xl font-bold text-center mb-1" style={{ fontSize: '32px', color: 'white' }}>About Game of Stones</h1>

                        {/* <p style={{background: 'var(--black-color)'}}>Something happened here</p> */}
                    </div>

                    <div style={{ marginBottom: '200px', background: 'var(--black-color)' }}>
                        <h1 className="text-2xl font-bold text-center mb-1" style={{ fontSize: '28px', color: 'white' }}>About Game of Stones</h1>

                    </div>
                </div>
                {/* {} */}
                <Footer />
            </div>
        </div>
    )
}

export default Home;