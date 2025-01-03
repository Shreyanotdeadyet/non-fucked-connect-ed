
import { NumberTicker } from '@/components/ui/number-ticker';

const GridLayout = () => {
  return (
    <div className="p-6">
      <div
        className="grid gap-4 p-4"
        style={{
          gridTemplateAreas: `
            "header header header header header header"
            "menu main main main right right"
            "menu footer footer footer footer footer"
          `,
        }}
      >
        <div
          className="bg-dtg-500 text-center p-5 text-lg font-medium"
          style={{ gridArea: "header" }}
        >
          <NumberTicker
            value={42} // The number
            suffix="+"
            direction="up"
            delay={0.5}
            className="text-3xl font-bold text-black-600"
            decimalPlaces={0}
          />
        </div>

        <div
          className="bg-dtg-500 text-center p-5 text-lg font-medium"
          style={{ gridArea: "menu" }}
        >
          <NumberTicker
            value={42}
            suffix="+"
            direction="up"
            delay={0.5}
            className="text-3xl font-bold text-black-600"
            decimalPlaces={0}
          />
        </div>

        <div
          className="bg-dtg-500 text-center p-5 text-lg font-medium"
          style={{ gridArea: "main" }}
        >
          <NumberTicker
            value={42}
            suffix="+"
            direction="up"
            delay={0.5}
            className="text-3xl font-bold text-black-600"
            decimalPlaces={0}
          />
        </div>

        <div
          className="bg-dtg-500 text-center p-5 text-lg font-medium"
          style={{ gridArea: "right" }}
        >
          <NumberTicker
            value={42}
            suffix="+"
            direction="up"
            delay={0.5}
            className="text-3xl font-bold text-black-600"
            decimalPlaces={0}
          />
        </div>

        <div
          className="bg-dtg-500 text-center p-5 text-lg font-medium"
          style={{ gridArea: "footer" }}
        >
          <NumberTicker
            value={42}
            suffix="+"
            direction="up"
            delay={0.5}
            className="text-3xl font-bold text-black-600"
            decimalPlaces={0}
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
