interface DesignWrapperInterface {
  children: React.ReactNode
}

export const DesignWrapper: React.FC<DesignWrapperInterface> = ({
  children,
}) => {
  return (
    <>
      <div className="bg-auth-bg h-screen w-screen bg-no-repeat shadow-lg">
        <div className="relative container mx-auto my-auto top-[100px] w-full h-auto border rounded-lg">
          {children}
        </div>
      </div>
    </>
  )
}
