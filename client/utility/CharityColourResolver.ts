import { CharityPreferences } from '../../models/charityPreferences'

// export default function resolveColour(
//   preferences: CharityPreferences | undefined,
//   colourAlias: string,
//   token: string,
// ): string {
//   console.log(preferences)
//   if (preferences) {
//     try {
//       if (preferences[colourAlias as keyof CharityPreferences]) {
//         console.log(
//           `${token}[${preferences[colourAlias as keyof CharityPreferences]}]`,
//         )
//         return `${token}[${preferences[colourAlias as keyof CharityPreferences]}]`
//         // preferences[colourAlias as keyof CharityPreferences]) as string
//       }
//     } catch {
//       return token + colourAlias
//     }
//   }

//   return token + colourAlias
// }

export default function resolveColours(
  preferences: CharityPreferences | undefined,
) {
  return {
    primary: preferences?.primary ? `${preferences.primary}` : 'primary',
    secondary: preferences?.secondary
      ? `${preferences.secondary}`
      : 'secondary',
    accent: preferences?.accent ? `${preferences.accent}` : 'accent',
    background: preferences?.background
      ? `${preferences.background}`
      : 'background',
    lightbackground: preferences?.lightbackground
      ? `${preferences.lightbackground}`
      : 'lightbackground',
    text: preferences?.text ? `${preferences.text}` : 'text',
  }
}
