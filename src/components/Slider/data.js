import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCameraRetro,
    faDragon,
    faFootballBall,
    faGlassCheers,
    faHelicopter
} from "@fortawesome/free-solid-svg-icons";
import comandos from "./../../comandos.jpg"
import complecs from "./../../complecs.jpg"
import complecs2 from "./../../complecs2.jpg"
import loyalty from "./../../loyalty.jpg"

export default [
    {

        id: 1,
        bgColor: "#932929",
        icon: <FontAwesomeIcon icon={faCameraRetro} size="3x" />,
        img: comandos,
        title: "Lorem Ipsum",
        desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 2,
        bgColor: "#4a316c",
        icon: <FontAwesomeIcon icon={faGlassCheers} size="3x" />,
        img: complecs,
        title: "Lorem Ipsum",
        desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 3,
        bgColor: "#0e5f73",
        icon: <FontAwesomeIcon icon={faDragon} size="3x" />,
        img: complecs2,
        title: "Lorem Ipsum",
        desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 4,
        bgColor: "#0e3177",
        icon: <FontAwesomeIcon icon={faFootballBall} size="3x" />,
        img: loyalty,
        title: "Lorem Ipsum",
        desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        id: 5,
        bgColor: "#852e35",
        icon: <FontAwesomeIcon icon={faHelicopter} size="3x" />,
        title: "Lorem Ipsum",
        desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
];
