# 🌹 Grok Couple — ANI & Valentine Matching MVP

A futuristic dating/matchmaking platform themed around ANI (AI girl) & Valentine (AI boy) — "The Grok Couple" — where users hold the $AV token to create and access their profile.

## 🚀 Features

- **Wallet Integration**: Connect Solana wallet and verify $AV token holdings
- **Profile Creation**: Create detailed profiles with name, bio, interests, and profile image
- **Profile Gallery**: Browse other verified $AV holders' profiles
- **Futuristic UI**: Space-themed design with neon pink & blue accents
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Wallet**: Solana Wallet Adapter
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (ready for integration)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd grok-couple-dating
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

- **Space Theme**: Dark background with subtle star animations
- **Neon Accents**: Pink and blue gradient effects
- **Glass Morphism**: Translucent cards with backdrop blur
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Layout**: Mobile-first design approach

## 🔧 Configuration

### Wallet Setup
The app uses Solana Wallet Adapter for wallet connections. Currently configured for devnet, but can be easily changed to mainnet.

### Token Verification
Currently uses mock token verification. To implement real $AV token checking:

1. Add the $AV token mint address
2. Implement token balance checking logic
3. Update the verification in `app/page.tsx`

### Database Integration
To connect with Supabase:

1. Create a Supabase project
2. Add environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Update the profile storage logic in the components

## 📱 Usage

1. **Connect Wallet**: Click "Connect Wallet" to connect your Solana wallet
2. **Verify Tokens**: Ensure you have at least 1 $AV token
3. **Create Profile**: Fill in your details and upload a profile image
4. **Browse Profiles**: View other verified users' profiles
5. **Connect**: Like and message other users

## 🎯 MVP Features Status

- ✅ Wallet connect to check $AV token holding
- ✅ Profile creation for verified holders
- ✅ Profile gallery with mock data
- ✅ ANI & Valentine lore section
- ✅ Futuristic space theme
- ✅ Responsive design

## 🔮 Future Enhancements

- Real token balance verification
- Database integration for profile storage
- Matching algorithm implementation
- Real-time messaging
- Profile verification system
- Community features

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by the Grok Couple team** 