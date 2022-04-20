import styled from "styled-components";
import text from "assets/text.png";
import password from "assets/password.png";
import eye from "assets/eye.svg";
import eyeHide from "assets/eyeHide.svg";
import line from "assets/line.png";
import navlink from "assets/navLink.svg";
import project from "assets/project.png";
import student from "assets/studentVector.svg";
import lineNav from "assets/lineNav.svg";
import userAvatar from "assets/userAvatar.svg";

export const IconText = styled.img.attrs({
  src: `${text}`,
})``;

export const IconPassword = styled.img.attrs({
  src: `${password}`,
})``;

export const IconEye = styled.img.attrs({
  src: `${eye}`,
})``;

export const IconEyeHide = styled.img.attrs({
  src: `${eyeHide}`,
})``;

export const Line = styled.img.attrs({
  src: `${line}`,
})`
  padding: 0 10px;
`;

export const Navlink = styled.img.attrs({
  src: `${navlink}`,
})`
  padding-right: 14px;
`;

export const IconProject = styled.img.attrs({
  src: `${project}`,
})``;

export const IconStudent = styled.img.attrs({
  src: `${student}`,
})``;
export const Navline = styled.img.attrs({
  src: `${lineNav}`,
})``;
export const UserAvatar = styled.img.attrs({
  src: `${userAvatar}`,
})``;
