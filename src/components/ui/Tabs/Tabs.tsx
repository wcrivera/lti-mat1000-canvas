import { useState, useEffect } from 'react';
import { TabButton } from './TabButton';
import { TabsProps } from './types';

/**
 * Componente de Tabs horizontal con íconos
 * Soporta modo controlado y no controlado
 */
export const Tabs: React.FC<TabsProps> = ({
    titulo,
    tabs,
    defaultTab,
    activeTab: controlledActiveTab,
    onTabChange,
    className = '',
}) => {
    // Estado interno para modo no controlado
    const [internalActiveTab, setInternalActiveTab] = useState<string>(
        defaultTab || tabs[0]?.id || ''
    );

    // Determinar si el componente es controlado
    const isControlled = controlledActiveTab !== undefined;
    const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

    // Sincronizar estado interno si cambia defaultTab
    useEffect(() => {
        if (!isControlled && defaultTab) {
            setInternalActiveTab(defaultTab);
        }
    }, [defaultTab, isControlled]);

    /**
     * Maneja el cambio de tab
     */
    const handleTabChange = (tabId: string): void => {
        if (isControlled) {
            // Modo controlado: notificar al padre
            onTabChange?.(tabId);
        } else {
            // Modo no controlado: actualizar estado interno
            setInternalActiveTab(tabId);
            onTabChange?.(tabId);
        }
    };

    // Obtener el contenido del tab activo
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

    return (
        <>
            {/* Navegación de tabs */}
            <div className={`w-full ${className}`}>
                <h2 className="text-white text-xl font-light mb-4">{titulo}</h2>
                <div
                    role="tablist"
                    aria-label="Tabs navigation"
                    className="flex space-x-2"
                >
                    {tabs.map((tab) => (
                        <TabButton
                            key={tab.id}
                            id={tab.id}
                            label={tab.label}
                            icon={tab.icon}
                            isActive={tab.id === activeTab}
                            disabled={tab.disabled}
                            // url={tab.url}
                            onClick={handleTabChange}
                        />
                    ))}
                </div>
            </div>

            {/* Contenido del tab activo */}
            <div className="w-full">
                <div
                    role="tabpanel"
                    id={`tabpanel-${activeTab}`}
                    aria-labelledby={`tab-${activeTab}`}
                    className="animate-fadeIn"
                >
                    {activeTabContent}
                </div>
            </div>
        </>
    );
};