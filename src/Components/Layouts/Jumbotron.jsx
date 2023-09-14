import TextTyper from 'text-type-animation-effect-react'
import Skills from '../Elements/Skills';

function Jumbotron() {
  const text = "I'm a junior fullstack web developer. I often to build some awesome website using laravel and React. I focused on single backend developer."

  return (
    <div
      className="w-full p-3 h-40 bg-gradient-to-r from-blue-300 to-light-blue-500 min-h-screen">
      <div
        className="absolute left-10 top-64"
        style={{ writingMode: "vertical-lr", textOrientation: 'mixed'}}>
        
          <a href='' className='hover:text-white font-bold text-xl'>-- johantoni91@gmail.com --</a>
        
      </div>
      <div className="mt-20 p-5 flex justify-center mx-auto flex-row gap-x-3 text-justify">
        <div className="max-w-lg mx-auto">
          <h1 className="text-medium text-black font-semibold mb-5">
            Hi, my name is
          </h1>
          <h1 className="text-4xl mb-7 text-black font-extrabold">
            Johan Toni Wijaya
          </h1>
          <h1 className="text-black text-2xl font-bold mb-5">
            Build in things of web
          </h1>
          <TextTyper text={text} interval={100} Markup={"p"} />
          
          <Skills/>
        </div>
        <div className="max-w-xl mx-auto">
          <img src="/img/pasfoto.png" width={"200px"} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Jumbotron;
