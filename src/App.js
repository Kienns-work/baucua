import { useRef, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [Dice, setDice] = useState({ a: 1, b: 2, c: 3 });
  const [isClose, setIsClose] = useState(false);
  const [isShake, setIsShake] = useState(false);

  const [TienDatCuoc, setTienDatCuoc] = useState({
    tom: 0,
    ga: 0,
    nai: 0,
    ca: 0,
    rua: 0,
    cua: 0,
  });
  const Regex = /^\d+$/;
  const batup = useRef();

  const upBat = () => {
    batup.current.classList.add("daybatvao");
    setIsClose(true);
  };

  const xoc = () => {
    if (isClose) {
      batup.current.classList.add("xoc");
      setTimeout(() => {
        batup.current.classList.remove("xoc");
      }, 800);
      setDice({
        a: Math.floor(Math.random() * 6) + 1,
        b: Math.floor(Math.random() * 6) + 1,
        c: Math.floor(Math.random() * 6) + 1,
      });
      setIsShake(true);
    } else {
      toast.warning(`Bạn phải đậy vào`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const dichSo = (a) => {
    switch (a) {
      case 1:
        return "tom";
        break;
      case 2:
        return "ga";
        break;
      case 3:
        return "nai";
        break;
      case 4:
        return "ca";
        break;
      case 5:
        return "rua";
        break;
      case 6:
        return "cua";
        break;
    }
  };

  const moBat = () => {
    if (isShake) {
      batup.current.classList.remove("daybatvao");
      let tienLai = 0;
      for (const key1 in Dice) {
        for (const key2 in TienDatCuoc) {
          console.log(dichSo(Dice[key1]) + " " + key2);
          if (dichSo(Dice[key1]) == key2) tienLai += TienDatCuoc[key2];
        }
      }
      setTimeout(() => {
        toast.success(`Bạn đã lãi ${tienLai}$ !!`, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, 1000);
      
    } else {
      toast.warning(`Bạn phải xóc đã chứ`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const datTien = (e) => {
    if (Regex.test(e.target.value)) {
      setTienDatCuoc({
        ...TienDatCuoc,
        [e.target.name]: parseInt(e.target.value),
      });
    } else
      toast.error("Hãy nhập đúng số tiền nhé !!", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  };
  const TongTienCuoc = useRef(0);

  const tinhTongTien = (o) => Object.values(o).reduce((a, b) => a + b, 0);

  TongTienCuoc.current = tinhTongTien(TienDatCuoc);
  return (
    <div className="h-full w-full flex">
      <ToastContainer></ToastContainer>
      <div className="left py-2 h-full basis-3/4 gap-2 grid grid-rows-2 grid-cols-3">
        <div className="border-2 px-5 mx-auto bg-red-100 flex rounded-3xl flex-col gap-3">
          <div className="w-64 h-64 flex rounded-full justify-center items-center bg-yellow-50">
            <img
              className="justify-center items-center block w-48"
              src={require("./Assets/1.png")}
            />
          </div>
          <input
            placeholder="Nhập tiền cược vào đây..."
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="tom"
            type="text"
            onBlur={datTien}
          ></input>
        </div>
        <div className="border-2 px-5 mx-auto bg-red-100 flex rounded-3xl flex-col gap-3">
          <div className="w-64 h-64 flex rounded-full justify-center items-center bg-yellow-50">
            <img
              className="justify-center items-center block w-48"
              src={require("./Assets/2.png")}
            />
          </div>
          <input
            placeholder="Nhập tiền cược vào đây..."
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="ga"
            type="text"
            onBlur={datTien}
          ></input>
        </div>
        <div className="border-2 px-5 mx-auto bg-red-100 flex rounded-3xl flex-col gap-3">
          <div className="w-64 h-64 flex rounded-full justify-center items-center bg-yellow-50">
            <img
              className="justify-center items-center block w-48"
              src={require("./Assets/3.png")}
            />
          </div>
          <input
            placeholder="Nhập tiền cược vào đây..."
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="nai"
            type="text"
            onBlur={datTien}
          ></input>
        </div>
        <div className="border-2 px-5 mx-auto bg-red-100 flex rounded-3xl flex-col gap-3">
          <div className="w-64 h-64 flex rounded-full justify-center items-center bg-yellow-50">
            <img
              className="justify-center items-center block w-48"
              src={require("./Assets/4.png")}
            />
          </div>
          <input
            placeholder="Nhập tiền cược vào đây..."
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="ca"
            type="text"
            onBlur={datTien}
          ></input>
        </div>
        <div className="border-2 px-5 mx-auto bg-red-100 flex rounded-3xl flex-col gap-3">
          <div className="w-64 h-64 flex rounded-full justify-center items-center bg-yellow-50">
            <img
              className="justify-center items-center block w-48"
              src={require("./Assets/5.png")}
            />
          </div>
          <input
            placeholder="Nhập tiền cược vào đây..."
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="rua"
            type="text"
            onBlur={datTien}
          ></input>
        </div>
        <div className="border-2 px-5 mx-auto bg-red-100 flex rounded-3xl flex-col gap-3">
          <div className="w-64 h-64 flex rounded-full justify-center items-center bg-yellow-50">
            <img
              className="justify-center items-center block w-48"
              src={require("./Assets/6.png")}
            />
          </div>
          <input
            placeholder="Nhập tiền cược vào đây..."
            className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
            name="cua"
            type="text"
            onBlur={datTien}
          ></input>
        </div>
      </div>
      <div className="right flex items-center flex-4 flex-col relative h-full basis-1/4">
        <div className="batngua relative">
          <div className="xucxac flex gap-2 items-center justify-center h-full">
            <img
              className="w-16 h-16 rounded-lg"
              src={require(`./Assets/${Dice.a}.png`)}
            ></img>
            <img
              className="w-16 h-16 rounded-lg"
              src={require(`./Assets/${Dice.b}.png`)}
            ></img>
            <img
              className="w-16 h-16 rounded-lg"
              src={require(`./Assets/${Dice.c}.png`)}
            ></img>
          </div>
        </div>
        <img
          ref={batup}
          className="batup left-0 absolute top-[-50%]"
          src="../batup.png"
        ></img>

        <div className="btns mt-5 flex gap-4">
          <div
            onClick={upBat}
            className="bg-green-100 hover:bg-green-300 font-bold py-2 px-4 rounded cursor-pointer"
          >
            Úp bát
          </div>
          <div
            onClick={xoc}
            className="bg-yellow-100 hover:bg-yellow-300 font-bold py-2 px-4 rounded cursor-pointer"
          >
            Xóc...
          </div>
          <div
            onClick={moBat}
            className="bg-red-100 hover:bg-red-300 font-bold py-2 px-4 rounded cursor-pointer"
          >
            Mở bát
          </div>
        </div>
        <div className="flex gap-4 mt-5 items-center">
          <h3 className="font-bold text-lg">Số tiền đặt cược</h3>
          <span className="sotiendinhdatcuoc">{TongTienCuoc.current}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
