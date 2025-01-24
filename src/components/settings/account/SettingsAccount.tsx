import ContentSection from "../content-section";
import { AccountForm } from "./account-form";

export default function SettingsAccount() {
  return (
    <ContentSection title="Account" desc="Update your account settings.">
      <AccountForm />
    </ContentSection>
  );
}
