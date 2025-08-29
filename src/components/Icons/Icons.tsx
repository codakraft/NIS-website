import { createIcon } from "../Icon";
import { ReactComponent as ArrowSvg } from "../../assets/icons/arrow.svg";
import { ReactComponent as MenuSvg } from "../../assets/icons/menu.svg";
import { ReactComponent as LogoSvg } from "../../assets/icons/logo.svg";
import { ReactComponent as LineSvg } from "../../assets/icons/Line.svg";
import { ReactComponent as FooterLine } from "../../assets/icons/footerLine.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/Location Icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/Phone Icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LogoTransparent } from "../../assets/icons/LogoTrans.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/commentIcon.svg";
import { ReactComponent as MissionIcon } from "../../assets/icons/mission.svg";
import { ReactComponent as VisionIcon } from "../../assets/icons/vision.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrowTop.svg";
import { ReactComponent as ArrowUpWhiteIcon } from "../../assets/icons/arrowTopWhite.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/MailIcon.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/icons/whatsapp-icon.svg";
import { ReactComponent as PhoneRedIcon } from "../../assets/icons/PhoneIconRed.svg";
import { ReactComponent as ChevronRightIcon } from "../../assets/icons/chevronRight.svg";
import { ReactComponent as ChevronRightDownIcon } from "../../assets/icons/chevronRightDown.svg";
import { ReactComponent as ChevronRightTopBlueIcon } from "../../assets/icons/arrowTopBlue.svg";
import { ReactComponent as ChevronRightRedIcon } from "../../assets/icons/chevronrightRed.svg";
import { ReactComponent as SubjectIcon1 } from "../../assets/icons/subjectIcon1.svg";
import { ReactComponent as SubjectIcon2 } from "../../assets/icons/subjectIcon2.svg";
import { ReactComponent as SubjectIcon3 } from "../../assets/icons/subjectIcon3.svg";
import { ReactComponent as SubjectIcon4 } from "../../assets/icons/subjectIcon4.svg";
import { ReactComponent as SubjectIcon5 } from "../../assets/icons/subjectIcon5.svg";
import { ReactComponent as SubjectIcon6 } from "../../assets/icons/subjectIcon6.svg";

export const ArrowIcon = createIcon(ArrowSvg);
export const MenuIcon = createIcon(MenuSvg);
export const LogoIcon = createIcon(LogoSvg);
export const LineIcon = createIcon(LineSvg);
export const TeacherStudentIcon = (props: any) => (
  <img
    src="/assets/icons/teacher-student.svg"
    alt="Teacher Student"
    {...props}
  />
);

export const OrnamentIcon = (props: any) => (
  <img src="/assets/icons/Ornament.svg" alt="Ornament" {...props} />
);

export const Nis1Icon = (props: any) => (
  <img src="/assets/icons/nis1.svg" alt="NIS 1" {...props} />
);

export const Nis2Icon = (props: any) => (
  <img src="/assets/icons/nis2.svg" alt="NIS 2" {...props} />
);

export const Nis3Icon = (props: any) => (
  <img src="/assets/icons/nis3.svg" alt="NIS 3" {...props} />
);

export const Nis4Icon = (props: any) => (
  <img src="/assets/icons/nis4.svg" alt="NIS 4" {...props} />
);
export const FooterLineIcon = createIcon(FooterLine);
export const LocationIconComponent = createIcon(LocationIcon);
export const PhoneIconComponent = createIcon(PhoneIcon);
export const FacebookIconComponent = createIcon(FacebookIcon);
export const TwitterIconComponent = createIcon(TwitterIcon);
export const LinkedInIconComponent = createIcon(LinkedInIcon);
export const InstagramIconComponent = createIcon(InstagramIcon);
export const LogoTransparentIcon = createIcon(LogoTransparent);
export const AboutUsHeroIcon = (props: any) => (
  <img src="/assets/icons/aboutUsHero.svg" alt="About Us Hero" {...props} />
);
export const CommentIconComponent = createIcon(CommentIcon);
export const MissionIconComponent = createIcon(MissionIcon);
export const VisionIconComponent = createIcon(VisionIcon);
export const ArrowUpIconComponent = createIcon(ArrowUpIcon);
export const ArrowUpWhiteIconComponent = createIcon(ArrowUpWhiteIcon);
export const EmailIconComponent = createIcon(EmailIcon);
export const WhatsAppIconComponent = createIcon(WhatsAppIcon);
export const PhoneRedIconComponent = createIcon(PhoneRedIcon);
export const ChevronRightIconComponent = createIcon(ChevronRightIcon);
export const ChevronRightDownIconComponent = createIcon(ChevronRightDownIcon);
export const ChevronRightTopBlueIconComponent = createIcon(
  ChevronRightTopBlueIcon
);
export const ChevronRightRedIconComponent = createIcon(ChevronRightRedIcon);
export const SubjectIcon1Component = createIcon(SubjectIcon1);
export const SubjectIcon2Component = createIcon(SubjectIcon2);
export const SubjectIcon3Component = createIcon(SubjectIcon3);
export const SubjectIcon4Component = createIcon(SubjectIcon4);
export const SubjectIcon5Component = createIcon(SubjectIcon5);
export const SubjectIcon6Component = createIcon(SubjectIcon6);

// YouTube Icon Component (inline SVG)
export const YouTubeIconComponent = (props: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
