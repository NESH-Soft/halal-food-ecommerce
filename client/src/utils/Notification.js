import { store } from 'react-notifications-component';
const notification=(m,t,d)=>{
  console.log(m,t)
  // console.log(nMsg,nType)
  store.addNotification({
    // title: "Wonderful!",
    message: m,
    type: t,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: d,
      onScreen: true
    }
  });

}

export default notification;