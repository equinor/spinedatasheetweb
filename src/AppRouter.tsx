import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import EquipmentListView from "./Views/EquipmentListView"
import TagComparisonView from "./Views/TagComparisonView"
import JIP33ElectricalTabView from "./Views/JIP33ElectricalTabView"
import JIP33MechanicalTabView from "./Views/JIP33MechanicalTabView"
import JIP33InstrumentTabView from "./Views/JIP33InstrumentTabView"

const AppRouter: FC = () => (
    <>
        <Routes>
            <Route path="/" element={<EquipmentListView />} />
            <Route path="/comparison" element={<TagComparisonView />} />
            <Route path="/:projectId" element={<EquipmentListView />} />
            <Route path=":projectId/JIP33/:tagId" element={<JIP33InstrumentTabView />} />
            <Route path="/JIP33Electrical" element={<JIP33ElectricalTabView />} />
            <Route path="/JIP33Mechanical" element={<JIP33MechanicalTabView />} />
        </Routes>
    </>
);

export default AppRouter;
