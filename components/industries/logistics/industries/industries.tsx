import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const IndustriesWeServe: NextPage = () => {
  	return (
    		<div className={styles.industriesWeServe}>
      			<div className={styles.industrialWarehouseConstructParent}>
        				<b className={styles.industrialWarehouseConstruct}>{`Industrial Warehouse Construction Across South India's Sectors `}</b>
        				<div className={styles.ourPreEngineeredWarehouse}>Our pre-engineered warehouse building structures serve sectors across Tamil Nadu, <br />Karnataka, Andhra Pradesh, Telangana, and Kerala</div>
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.frameGroup}>
          					<div className={styles.rectangleParent}>
            						<Image className={styles.frameChild} src="/images/industries/logistics/industries/fmcg-retail.png" width={382} height={252} sizes="100vw" alt="FMCG and retail distribution warehouse" />
            						<div className={styles.fmcgRetailParent}>
              							<div className={styles.fmcgRetail}>{`FMCG & Retail`}</div>
              							<div className={styles.distributionWarehouseBuildin}>Distribution warehouse buildings engineered for high-throughput deliveries and dense SKU storage.</div>
            						</div>
          					</div>
          					<div className={styles.rectangleParent}>
            						<Image className={styles.frameChild} src="/images/industries/logistics/industries/automotive.png" width={382} height={252} sizes="100vw" alt="Automotive warehouse facility" />
            						<div className={styles.fmcgRetailParent}>
              							<div className={styles.fmcgRetail}>Automotive</div>
              							<div className={styles.distributionWarehouseBuildin}>{`High-span auto parts warehouses with crane rails, mezzanine decks, and heavy floor load designs. `}</div>
            						</div>
          					</div>
          					<div className={styles.rectangleContainer}>
            						<Image className={styles.frameChild} src="/images/industries/logistics/industries/pharmaceuticals.png" width={382} height={252} sizes="100vw" alt="Pharmaceutical warehouse facility" />
            						<div className={styles.fmcgRetailParent}>
              							<div className={styles.fmcgRetail}>Pharmaceuticals</div>
              							<div className={styles.distributionWarehouseBuildin}>{`Temperature-controlled warehouse buildings compliant with GMP standards for pharma storage and logistics. `}</div>
            						</div>
          					</div>
          					<div className={styles.rectangleContainer}>
            						<Image className={styles.frameChild} src="/images/industries/logistics/industries/ecommerce.png" width={382} height={252} sizes="100vw" alt="E-commerce warehouse operations" />
            						<div className={styles.fmcgRetailParent}>
              							<div className={styles.fmcgRetail}>E-commerce</div>
              							<div className={styles.distributionWarehouseBuildin}>Open-plan pre-engineered structures for 24x7 warehouse operations with automation-ready eave heights.</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.rectangleContainer}>
            						<Image className={styles.frameChild} src="/images/industries/logistics/industries/cold-chain-agriculture.png" width={382} height={252} sizes="100vw" alt="Cold chain and agriculture storage" />
            						<div className={styles.fmcgRetailParent}>
              							<div className={styles.fmcgRetail}>{`Cold Chain & Agriculture`}</div>
              							<div className={styles.distributionWarehouseBuildin}>{`Cold storage structures with high refrigeration load-bearing capacity for perishable produce, frozen foods, and dairy products. `}</div>
            						</div>
          					</div>
          					<div className={styles.rectangleContainer}>
            						<Image className={styles.frameChild} src="/images/industries/logistics/industries/3pl-operators.png" width={382} height={252} sizes="100vw" alt="3PL logistics facility" />
            						<div className={styles.fmcgRetailParent}>
              							<div className={styles.fmcgRetail}>3PL Operators</div>
              							<div className={styles.multiTenantLogisticsFacilit}>{`Multi-tenant logistics facility buildings with bay designs that allow  expansion and shared-facility integration. `}</div>
            						</div>
          					</div>
          					<div className={styles.rectangleContainer}>
            						<Image className={styles.frameChild} src="/images/industries/logistics/industries/textiles-apparel.png" width={382} height={252} sizes="100vw" alt="Textiles and apparel warehouse" />
            						<div className={styles.fmcgRetailParent}>
              							<div className={styles.fmcgRetail}>{`Textiles & Apparel`}</div>
              							<div className={styles.distributionWarehouseBuildin}>Dust-resistant textile warehousing with adequate climate-management controls for garment logistics.</div>
            						</div>
          					</div>
          					<div className={styles.rectangleContainer}>
            						<Image className={styles.frameChild} src="/images/industries/logistics/industries/chemical-industrial.png" width={382} height={252} sizes="100vw" alt="Chemical and industrial warehouse" />
            						<div className={styles.fmcgRetailParent}>
              							<div className={styles.fmcgRetail}>{`Chemical & Industrial`}</div>
              							<div className={styles.distributionWarehouseBuildin}>{`Specialised warehouses with fireproof cladding, ventilation control, and spill containment integration. `}</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.overlayborder}>
        				<div className={styles.strongEveryContainer}>
          					<span className={styles.strongEveryContainer2}>
            						<span>Irrespective of where you&apos;re located in</span>
            						<b className={styles.southIndia}> South India - Chennai, Coimbatore, Bengaluru, Hyderabad, or Kochi -</b>
            						<span>
              							<span className={styles.span}>{` `}</span>
              							<span>Mekark&apos;s warehouse and logistics facility engineering is customised to suit your requirements</span>
              							<span className={styles.span}>{`. `}</span>
            						</span>
          					</span>
        				</div>
      			</div>
    		</div>);
};

export default IndustriesWeServe;
