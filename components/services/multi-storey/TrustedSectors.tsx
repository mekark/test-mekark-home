import { TrustedSectorsSection } from "@/components/trusted-sectors/TrustedSectorsSection";

const TRUSTED_SECTORS_DESCRIPTION =
  "Our project mix spans single-floor sheds to multi-level commercial and industrial structures.";

export default function TrustedSectors() {
  return (
    <TrustedSectorsSection
      variant="services"
      description={TRUSTED_SECTORS_DESCRIPTION}
    />
  );
}
