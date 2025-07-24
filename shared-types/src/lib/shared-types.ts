// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  
  // Authentication
  authProvider: AuthProvider;
  googleId?: string;
  emailVerified: boolean;
  
  // Verification
  verificationStatus: VerificationStatus;
  verifiedCompany?: string;
  companyDomain?: string;
  companyTier?: CompanyTier;
  verifiedAt?: Date;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  lastActiveAt: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  
  // Basic Info
  bio?: string;
  age?: number;
  location?: string;
  
  // Professional
  jobTitle?: string;
  company?: string;
  yearsExperience?: number;
  workStyle?: WorkStyle;
  
  // App Data
  profileComplete: boolean;
  onboardingComplete: boolean;
  
  // Relations
  photos: Photo[];
  techStack: UserTechStack[];
  preferences?: UserPreferences;
}

export interface Photo {
  id: string;
  profileId: string;
  url: string;
  order: number;
  isMain: boolean;
  createdAt: Date;
}

export interface TechStack {
  id: string;
  name: string;
  category: TechCategory;
  icon?: string;
}

export interface UserTechStack {
  profileId: string;
  techStackId: string;
  experience: ExperienceLevel;
  techStack: TechStack;
}

export interface UserPreferences {
  minAge: number;
  maxAge: number;
  maxDistance: number;
  interestedInGenders: Gender[];
  lookingFor: RelationshipType[];
  techStackPreferences?: TechCategory[];
  companyTierPreferences?: CompanyTier[];
}

// Authentication Types
export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  requiresOnboarding: boolean;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface GoogleAuthDto {
  idToken: string;
}

// Matching Types
export interface DiscoveryUser extends User {
  profile: UserProfile;
  compatibilityScore?: number;
  compatibilityBreakdown?: ScoreBreakdown;
  matchInsights?: string[];
  matchReasons?: string[];
}

export interface ScoreBreakdown {
  techStack: number;
  company: number;
  experience: number;
  location: number;
  workStyle: number;
  verification: number;
}

export interface DiscoveryFilters {
  ageRange?: { min: number; max: number };
  distance?: number;
  companyTiers?: CompanyTier[];
  companies?: string[];
  techStacks?: string[];
  experienceRange?: { min: number; max: number };
  workStyle?: WorkStyle;
  verifiedOnly?: boolean;
}

// Chat Types
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  messageType: MessageType;
  isRead: boolean;
  readAt?: Date;
  createdAt: Date;
  sender: {
    id: string;
    firstName: string;
    profilePicture?: string;
  };
}

export interface Conversation {
  id: string;
  matchId: string;
  messages: Message[];
  lastMessageAt: Date;
  createdAt: Date;
}

export interface SendMessageDto {
  conversationId: string;
  content: string;
  messageType?: MessageType;
  tempId?: string;
}

// Verification Types
export interface CompanyVerification {
  id: string;
  userId: string;
  workEmail: string;
  companyDomain: string;
  companyName: string;
  verificationCode: string;
  status: VerificationStatus;
  attempts: number;
  requestedAt: Date;
  expiresAt: Date;
  verifiedAt?: Date;
}

export interface InitiateVerificationDto {
  workEmail: string;
}

export interface VerifyCodeDto {
  code: string;
}

export interface VerificationResponse {
  message: string;
  companyName: string;
  tier: CompanyTier;
  expiresAt: Date;
}

// Analytics Types
export interface AnalyticsEvent {
  id: string;
  userId: string;
  eventType: string;
  eventData: Record<string, any>;
  timestamp: Date;
}

export interface DashboardMetrics {
  overview: {
    totalUsers: number;
    verifiedUsers: number;
    verificationRate: number;
    activeUsers: number;
    totalMatches: number;
    totalMessages: number;
  };
  growth: any;
  verification: any;
  engagement: any;
  lastUpdated: Date;
}

// Enums
export enum AuthProvider {
  EMAIL = 'EMAIL',
  GOOGLE = 'GOOGLE',
}

export enum VerificationStatus {
  UNVERIFIED = 'UNVERIFIED',
  PENDING = 'PENDING', 
  VERIFIED = 'VERIFIED',
}

export enum CompanyTier {
  FAANG = 'FAANG',
  BIG_TECH = 'BIG_TECH',
  UNICORN = 'UNICORN',
  STARTUP = 'STARTUP',
  ENTERPRISE = 'ENTERPRISE',
}

export enum WorkStyle {
  REMOTE = 'REMOTE',
  HYBRID = 'HYBRID',
  OFFICE = 'OFFICE',
  FLEXIBLE = 'FLEXIBLE',
}

export enum TechCategory {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  MOBILE = 'MOBILE',
  DEVOPS = 'DEVOPS',
  DATA_SCIENCE = 'DATA_SCIENCE',
  DESIGN = 'DESIGN',
}

export enum ExperienceLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  EXPERT = 'EXPERT',
}

export enum InteractionType {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
  SUPER_LIKE = 'SUPER_LIKE',
}

export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  SYSTEM = 'SYSTEM',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NON_BINARY = 'NON_BINARY',
  OTHER = 'OTHER',
}

export enum RelationshipType {
  CASUAL = 'CASUAL',
  SERIOUS = 'SERIOUS',
  FRIENDSHIP = 'FRIENDSHIP',
  PROFESSIONAL = 'PROFESSIONAL',
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface ErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
