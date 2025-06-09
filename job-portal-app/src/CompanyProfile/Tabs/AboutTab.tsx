import { companyData } from "../../Data/Company";

const AboutTab = () => {
  // it's an object where the keys are strings, and the values can be anything (number, string, array, object, etc.).
  const company: { [key: string]: any } = companyData;
  return (
    <div className="flex flex-col gap-5">
      {Object.keys(company).map(
        (key, index) =>
          key != "Name" && (
            <div key={index} className="">
              <div className="text-xl mb-3 font-semibold">{key}</div>
              {key != "Website" ? (
                <div className="text-sm text-[#b0b0b0] text-justify">
                  {key != "Specialties"
                    ? company[key]
                    : company[key].map((item: string, index: number) => (
                        <span key={index} className="mr-2">
                          &bull; {item}
                        </span>
                      ))}
                </div>
              ) : (
                <a
                  href={company[key]}
                  className="text-sm text-[#ffbd20] text-justify"
                >
                  {company[key]}
                </a>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default AboutTab;
