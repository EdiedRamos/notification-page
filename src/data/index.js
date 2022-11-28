import { ACTIONS } from "./actions";

import MarkWebber from "../assets/avatar-mark-webber.webp";
import AngelaGray from "../assets/avatar-angela-gray.webp";
import AnnaKim from "../assets/avatar-anna-kim.webp";
import JacobThompson from "../assets/avatar-jacob-thompson.webp";
import KimberlySmith from "../assets/avatar-kimberly-smith.webp";
import NathanPeterson from "../assets/avatar-nathan-peterson.webp";
import RizkyHasanuddin from "../assets/avatar-rizky-hasanuddin.webp";

import ImageChess from "../assets/image-chess.webp";

export const data = [
  {
    notificationId: 1,
    memberImage: MarkWebber,
    memberName: "Mark Webber",
    action: ACTIONS.REACTON,
    actionContent: "reacted to your recent post",
    actionContext: "My first tournament today!",
    actionTime: "1m ago",
    read: false,
  },
  {
    notificationId: 2,
    memberImage: AngelaGray,
    memberName: "Angela Gray",
    action: ACTIONS.FOLLOW,
    actionContent: "followed you",
    actionTime: "5m ago",
    read: false,
  },
  {
    notificationId: 3,
    memberImage: JacobThompson,
    memberName: "Jacob Thompson",
    action: ACTIONS.JOIN,
    actionContent: "has joined your group",
    actionContext: "Chess Club",
    actionTime: "1 day ago",
    read: false,
  },
  {
    notificationId: 4,
    memberImage: RizkyHasanuddin,
    memberName: "Rizky Hasanuddin",
    action: ACTIONS.MESSAGE,
    actionContent: "sent you a private message",
    actionContext:
      "Hellow, thanks for setting up the Chess Club.I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    actionTime: "5 days ago",
    read: true,
  },
  {
    notificationId: 5,
    memberImage: KimberlySmith,
    memberName: "Kimberly Smith",
    action: ACTIONS.COMMENT,
    actionContent: "commented on your picture",
    actionContext: ImageChess,
    actionTime: "1 week ago",
    read: true,
  },
  {
    notificationId: 6,
    memberImage: NathanPeterson,
    memberName: "Nathan Peterson",
    action: ACTIONS.REACTON,
    actionContent: "reacted to your recent post",
    actionContext: "5 end-game strategies to increase your win rate",
    actionTime: "2 weeks ago",
    read: true,
  },
  {
    notificationId: 7,
    memberImage: AnnaKim,
    memberName: "Anna Kim",
    action: ACTIONS.LEFT,
    actionContent: "left the group",
    actionContext: "Chess Club",
    actionTime: "2 weeks ago",
    read: true,
  },
];
