import {
  ShieldCheck, BadgeCheck, FileCheck2, Cpu, Users, Lock, MapPin, MapPinned, Map,
  HeartHandshake, Headphones, Home, Building2, Layers, TreePine, Store, TrendingUp,
  MessagesSquare, Scale, Megaphone, Navigation, Bell, Smartphone, Heart, Search,
  Sparkles, Compass, Route, CalendarCheck, MessageCircle, KeyRound, Eye, Zap,
  Wallet, Clock, User, SlidersHorizontal, Bed, Bath, Maximize2, Star, Play,
} from "lucide-react";

export const iconMap = {
  ShieldCheck, BadgeCheck, FileCheck2, Cpu, Users, Lock, MapPin, MapPinned, Map,
  HeartHandshake, Headphones, Home, Building2, Layers, TreePine, Store, TrendingUp,
  MessagesSquare, Scale, Megaphone, Navigation, Bell, Smartphone, Heart, Search,
  Sparkles, Compass, Route, CalendarCheck, MessageCircle, KeyRound, Eye, Zap,
  Wallet, Clock, User, SlidersHorizontal, Bed, Bath, Maximize2, Star, Play,
} as const;

export type IconName = keyof typeof iconMap;
