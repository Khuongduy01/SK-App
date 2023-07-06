import React, { useEffect, useState } from "react";
import { Grid, FormControl, MenuItem, Select } from "@mui/material";
import getSelectAddress from "../util/getSelectAddress";

function SelectAddress({ handleSelect = () => {}, name, value }) {
  const [dataSelect, setDataSelect] = useState({ province: [], district: [], wards: [] });
  const [selectedAddress, setSelectedAddress] = useState({
    province: "Chọn Tỉnh Thành",
    district: "Chọn Quận / Huyện",
    wards: "Chọn Phường / Xã",
  });

  useEffect(() => {
    getSelectAddress().then((res) => {
      if (res) {
        setDataSelect({
          province: res,
          district: [],
          wards: [],
        });
      }
    });
  }, []);

  useEffect(() => {
    handleSelect({ [name]: selectedAddress });
  }, [selectedAddress, name, handleSelect]);

  const handleChange = (e) => {
    if (e.target.name === "province") {
      setSelectedAddress({
        province: e.target.value,
        district: "Chọn Quận / Huyện",
        wards: "Chọn Phường / Xã",
      });
    } else if (e.target.name === "district") {
      setSelectedAddress({
        ...selectedAddress,
        district: e.target.value,
        wards: "Chọn Phường / Xã",
      });
    } else {
      setSelectedAddress({
        ...selectedAddress,
        [e.target.name]: e.target.value,
      });
    }
  };

  if (dataSelect)
    return (
      <Grid container mb={"16px"}>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth sx={{ padding: "6px" }}>
            <Select
              value={selectedAddress.province}
              name="province"
              sx={{
                "& .MuiSelect-select": {
                  p: "12px",
                },
              }}
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <MenuItem value={"Chọn Tỉnh Thành"} disabled selected>
                Chọn Tỉnh Thành
              </MenuItem>
              {dataSelect.province.map((value, index) => {
                return (
                  <MenuItem
                    value={value.name}
                    key={index}
                    onClick={() => {
                      setDataSelect({ ...dataSelect, district: value.districts, wards: [] });
                    }}
                  >
                    {value.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth sx={{ padding: "6px" }}>
            <Select
              value={selectedAddress.district}
              sx={{
                "& .MuiSelect-select": {
                  p: "12px",
                },
              }}
              name="district"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <MenuItem value={"Chọn Quận / Huyện"} disabled selected>
                Chọn Quận / Huyện
              </MenuItem>
              {dataSelect.district.map((value, index) => {
                return (
                  <MenuItem
                    value={value.name}
                    key={index}
                    onClick={() => {
                      setDataSelect({ ...dataSelect, wards: value.wards });
                    }}
                  >
                    {value.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth sx={{ padding: "6px" }}>
            <Select
              value={selectedAddress.wards}
              name="wards"
              sx={{
                "& .MuiSelect-select": {
                  p: "12px",
                },
              }}
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <MenuItem value={"Chọn Phường / Xã"} disabled selected>
                Chọn Phường / Xã
              </MenuItem>
              {dataSelect.wards.map((value, index) => {
                return (
                  <MenuItem value={value.name} key={index}>
                    {value.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
}

export default SelectAddress;
