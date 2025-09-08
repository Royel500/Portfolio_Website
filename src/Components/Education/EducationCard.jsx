import React from 'react';

const EducationCard = ({ data }) => {
  const { type, institution, years, icon: CardIcon, achievements, cardBg } = data;

  return (
    <div className={`rounded-3xl shadow-red-700  hover:shadow-fuchsia-700 transition-transform duration-300 
    hover:scale-95 shadow-md overflow-hidden ${cardBg}`}>
      <div className="p-6">
        <div className="flex items-start mb-6">
          <div className=" p-3 rounded-lg mr-4 shadow-sm">
            {CardIcon && <CardIcon className="text-blue-600 text-2xl" />}
          </div>
          <div className=' px-2 rounded'>
            <h3 className="text-xl font-bold ">{type}</h3>
            <p className=" rounded">{institution}</p>
            <p className=" text-sm">{years}</p>
          </div>
        </div>

        <div className="border-t  pt-4">
          <h4 className="text-lg font-semibold  mb-4">
            Achievements & Focus
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => {
              const AchievementIcon = achievement.icon;
              return (
                <div key={index} className="flex items-center   rounded-lg p-2 shadow-sm">
                  {AchievementIcon && <AchievementIcon className="text-blue-500 mr-2" />}
                  <span className="text-sm">{achievement.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;