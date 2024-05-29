import { Button, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
export type Ref = BottomSheetModal;
const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
    >
      <View>
        <Text>Bottom Sheet</Text>
        <Button title="Dismiss" onPress={() => dismiss} />
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({});
