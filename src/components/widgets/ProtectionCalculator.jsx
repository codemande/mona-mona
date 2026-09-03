import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Droplet, LayoutGrid, ShieldCheck } from "lucide-react";
import Select from "../ui/Select.jsx";
import Button from "../ui/Button.jsx";
import { useToast } from "../ui/Toast.jsx";
import { getBrands, getModelsByBrand, getProtectionPrice } from "../../api/client.js";
import { waProtectionLink } from "../../utils/waLink.js";
import { fadeInUp } from "../../styles/motion.js";
import useCountUp from "../../hooks/useCountUp.js";
import styles from "./ProtectionCalculator.module.css";

function PriceCountUp({ price }) {
  const { ref, value } = useCountUp(price, { duration: 1 });
  return (
    <span ref={ref}>
      ₦{value.toLocaleString("en-NG")}
    </span>
  );
}

const included = [
  { icon: Smartphone, label: "Screen Damage" },
  { icon: Droplet, label: "Liquid Damage" },
  { icon: LayoutGrid, label: "Back Glass Damage" },
  { icon: ShieldCheck, label: "Other Accidental Damage" },
];

export default function ProtectionCalculator() {
  const { showToast } = useToast();
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [loadingModels, setLoadingModels] = useState(false);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    getBrands().then(setBrands);
  }, []);

  useEffect(() => {
    if (!brand) {
      setModels([]);
      setModel("");
      return;
    }
    setLoadingModels(true);
    setModel("");
    setResult(null);
    getModelsByBrand(brand).then((data) => {
      setModels(data);
      setLoadingModels(false);
    });
  }, [brand]);

  const handleCheck = async () => {
    if (!brand || !model) return;
    setChecking(true);
    try {
      const data = await getProtectionPrice(brand, model);
      setResult(data);
    } catch {
      showToast({ type: "error", message: "We couldn't check that price. Please try again." });
    } finally {
      setChecking(false);
    }
  };

  const modelName = result?.model?.name ?? "";

  return (
    <div className={styles.widget}>
      <div className={styles.fields}>
        <Select
          id="calc-brand"
          label="Select Brand"
          placeholder="Choose a brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          {brands.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </Select>

        <Select
          id="calc-model"
          label="Select Model"
          placeholder={loadingModels ? "Loading models…" : "Choose a model"}
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={!brand || loadingModels}
        >
          {models.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </Select>

        <Button
          onClick={handleCheck}
          disabled={!brand || !model || checking}
          className={styles.checkBtn}
        >
          {checking ? "Checking…" : "Check Protection Price"}
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            className={styles.result}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            <p className={styles.resultLabel}>Your One-Year Protection Price</p>
            <p className={styles.resultPrice}>
              <PriceCountUp price={result.price} />
              <span> / year</span>
            </p>
            <p className={styles.resultModel}>{modelName}</p>

            <ul className={styles.includedList}>
              {included.map((item) => (
                <li key={item.label}>
                  <item.icon size={16} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>

            <p className={styles.notice}>
              Your phone must pass a physical inspection at an authorised Mona Partner Store before
              protection can be activated.
            </p>

            <div className={styles.resultActions}>
              <Button to="/partner-stores">Choose a Partner Store</Button>
              <Button href={waProtectionLink(modelName)} variant="whatsapp">
                Continue on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
