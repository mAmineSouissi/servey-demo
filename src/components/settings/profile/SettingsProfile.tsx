import ContentSection from '../content-section'
import ProfileForm from './profile-form'

export default function SettingsProfile() {
  return (
    <ContentSection
      title='Profile'
      desc='Below is your profile information.'
    >
      <ProfileForm />
    </ContentSection>
  )
}