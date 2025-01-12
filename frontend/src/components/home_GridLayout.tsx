
import { NumberTicker } from '@/components/ui/number-ticker';

const GridLayout = () => {
  return (
    <div className="py-10 md:px-36">
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
          className="bg-tg-600 text-center p-5 text-lg font-medium rounded-xl"
          style={{ gridArea: "header" }}
        >
          <NumberTicker
            value={100} // The number
            suffix="+"
            direction="up"
            delay={0.5}
            className="text-3xl font-bold text-black-600"
            decimalPlaces={0}
          />
          <br />
          <span className='text-black text-3xl font-bold text-black-600'> Students Gurantee</span>
        </div>

        <div
          className="bg-tg-600 text-center p-5 text-lg font-medium rounded-xl"
          style={{ gridArea: "menu" }}
        >
          <NumberTicker
            value={25}
            suffix="+"
            direction="up"
            delay={0.5}
            className="text-3xl font-bold text-black-600"
            decimalPlaces={0}
          />
          <br />
          <span className='text-black text-3xl font-bold text-black-600'> Workshops </span>
          <br />
          <span className='text-black text-3xl font-bold text-black-600'> Conducted </span>
        </div>

        <div
          className="bg-tg-600 text-center p-5 text-lg font-medium rounded-xl"
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
          className="bg-tg-600 text-center p-5 text-lg font-medium rounded-xl"
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
          className="bg-tg-600 text-center p-5 text-lg font-medium rounded-xl"
          style={{ gridArea: "footer" }}
        >
          <NumberTicker
            value={100}
            suffix="%"
            direction="up"
            delay={0.5}
            className="text-3xl font-bold text-black-600"
            decimalPlaces={0}
          />
          <br />
          <span className='text-black text-3xl font-bold text-black-600'> Acceptance </span>
          <br />
          <span className='text-black text-3xl font-bold text-black-600'> Rate </span>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
