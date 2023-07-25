import React from 'react';

const dummyData = [
  { mission_id: 1, mission_name: 'hello', description: 'lorem iaopsda' },
  { mission_id: 1, mission_name: 'hello', description: 'lorem iaopsda' },
  { mission_id: 1, mission_name: 'hello', description: 'lorem iaopsda' },
  { mission_id: 1, mission_name: 'hello', description: 'lorem iaopsda' },
  { mission_id: 1, mission_name: 'hello', description: 'lorem iaopsda' },
];

const Mission = () => (
  <div className="flex justify-center">
    <div className="flex max-w-wrap w-full p-1">
      <table className="w-full mt-4">
        <tr>
          <th className="w-[15%] px-2 py-1 text-left border-2 border-slate-200">
            Mission
          </th>
          <th className="w-[55%] px-2 py-1 text-left border-2 border-slate-200">
            Description
          </th>
          <th className="w-[15%] px-2 py-1 text-left border-2 border-slate-200">
            Status
          </th>
          <th
            className="w-[15%] px-2 py-1 text-left border-2 border-slate-200"
            aria-label="action-button"
          />
        </tr>
        {dummyData.map((item) => (
          <tr className="odd:bg-white even:bg-zinc-100" key={item.mission_id}>
            <td className="px-2 py-1 text-left border-2 border-slate-200">{item.mission_name}</td>
            <td className="px-2 py-1 text-left border-2 border-slate-200">{item.description}</td>
            <td className="px-2 py-1 text-left border-2 border-slate-200">{item.reserved ? 'active' : 'not active'}</td>
            <td className="px-2 py-1 text-left border-2 border-slate-200">{item.reserved ? 'active' : 'not active'}</td>
          </tr>
        ))}
      </table>
    </div>
  </div>
);

export default Mission;
